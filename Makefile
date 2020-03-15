export MODEL_BASENAME=model
export REPO_NAME=taskmarket-frontend
export GITHUB_ORGANIZATION=kode-konveyor
export CONSISTENCY_INPUTS=model.rich shippable/behaviours.xml
LANGUAGE=java
BEFORE_ALL=setgithubkey

include /usr/local/toolchain/rules.zenta

runapache:
	tools/runApache
	touch runapache

setgithubkey:
	ssh -v github.com
	cp tools/github_ssh_config ~/.ssh/config

delink:
	zenta-xslt-runner -xsl:xslt/delink.xslt -s:$(MODEL_BASENAME).zenta -o:modelparts/$(MODEL_BASENAME).zentapart -im:delink

$(MODEL_BASENAME).zenta:
	zenta-xslt-runner -xsl:xslt/delink.xslt -s:.zentasources -im:prepare|sed 's/^.*?>//' | sh -xe
	zenta-xslt-runner -xsl:xslt/delink.xslt -o:$(MODEL_BASENAME).zenta -s:modelparts/$(MODEL_BASENAME).zentapart -im:link

