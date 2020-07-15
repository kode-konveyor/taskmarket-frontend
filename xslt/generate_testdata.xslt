<?xml version="1.0" encoding="ISO-8859-1"?>
<!DOCTYPE xml>
<xsl:stylesheet version="2.0"
	xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xmlns:zenta="http://magwas.rulez.org/zenta"
	xmlns:zentatools="http://magwas.rulez.org/zentatools"
	xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

	<xsl:output method="xml" version="1.0" encoding="utf-8"
		indent="yes" omit-xml-declaration="yes" />

	<xsl:include href="xslt/lib/dto.xslt" />
	<xsl:include href="xslt/lib/entity.xslt" />
	<xsl:include href="xslt/lib/functions.generate.xslt" />
	<xsl:include href="xslt/lib/functions.generate.getter.xslt" />

	<xsl:param name="outputbase" />


	<xsl:variable name="testData">
		<xsl:for-each select="//element[@xsi:type='Test Data']">
			<testData>
				<xsl:copy-of select="@name" />
				<xsl:attribute name="package"
					select="zenta:fullPackageName(/,zenta:neighbours(/,.,'contains,2'))" />
				<xsl:copy-of
					select="
                	for $getter in zenta:neighbours($doc,.,'contains,1')[@name='get()']
                	return zenta:neighbours($doc,$getter,'has an example as/is an example of,2')
                " />
				<xsl:for-each
					select="zenta:neighbours($doc,.,'contains,1')[@xsi:type='Test Artifact']">
					<xsl:copy-of select="zenta:extractTestArtifact(.,0)" />
				</xsl:for-each>
			</testData>
		</xsl:for-each>
	</xsl:variable>

	<xsl:template match="/" mode="python javascript">
	</xsl:template>



	<xsl:template match="/" mode="struct">
		<xsl:for-each select="//element[@xsi:type='Business Object' and substring(@name,1,1) = upper-case(substring(@name,1,1))]">
			<BO>
			<xsl:copy-of select="@name"/>
			<xsl:attribute name="package"
				select="zenta:fullPackageName(/,zenta:neighbours(/,.,'has an example as/is an example of,1;contains,2'))" />
			<xsl:for-each select="value[@direction=1 and (@ancestorName='has' or @ancestorName='aggregates')]">
			<field>
				<xsl:copy-of select="@ancestorName"/>
				<xsl:variable name="type" select="distinct-values(//element[@id=current()/@target]/value[@ancestorName='is a/is the type of']/@name)"/>
				<xsl:attribute name="type" select="zenta:makeTypeName($type)"/>
				<xsl:variable name="modifiers" select="tokenize(tokenize(@relationName,';')[2],',')"/>
				<xsl:attribute name="modifiers" select="$modifiers"/>
				<xsl:variable name="typeId" select="distinct-values(//element[@id=current()/@target]/value[@ancestorName='is a/is the type of']/@target)"/>
				<xsl:attribute name="package"
					select="zenta:fullPackageName(/,zenta:neighbours(/,//element[@id=$typeId],'has an example as/is an example of,1;contains,2'))" />
				<xsl:variable name="realName" select="
					concat(
						zenta:makeVariableName(
						if(count(tokenize(@relationName,';'))>0 and tokenize(@relationName,';')[1]!='')
							then tokenize(@relationName,';')[1]
							else @name
						),
						if($modifiers='reference')
						then 'Id'
						else ''
						,
						if(@ancestorName='aggregates')
						then 's'
						else ''
					)
					"/>
				<xsl:attribute name="fieldName" select="$realName"/>
			</field>
			</xsl:for-each>
			</BO>
		</xsl:for-each>
	</xsl:template>

	<xsl:template match="/" mode="java">
		<xsl:variable name="struct">
			<xsl:apply-templates select="/" mode="struct"/>
		</xsl:variable>
		<xsl:copy-of select="$struct"/>
		<xsl:apply-templates select="$struct//BO" mode="javaDTO"/>
		<xsl:apply-templates select="$struct//BO" mode="javaEntity"/>
	</xsl:template>


</xsl:stylesheet>

