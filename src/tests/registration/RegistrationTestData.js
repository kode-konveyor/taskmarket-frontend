import RegistrationActions from "../../registration/RegistrationActions";
const EXPECTED_RESPONSE = { id: 1 };

export const RegistrationTestData = {
    LEGAL_FORMS: [{ id: 1, country: "US", legalFormName: "name" }],
    FORM_DATA: { dummy: "dummy" },
    CONVERTED_LEGAL_FORMS: [
        { enum: [1], title: "name - US", type: "number" },
    ],
    EXPECTED_RESPONSE,
    EXPECTED_ACTION: { type: RegistrationActions.SUBMIT, response: EXPECTED_RESPONSE },
    LOADING: "Loading...",

    SCHEMA: {
        properties: {
            email: { title: "E-mail", type: "string" },
            isTermsAccepted: {
                title: "Accept terms and consitions",
                type: "boolean",
            },
            legalAddress: { title: "Address", type: "string" },
            legalForm: {
                anyOf: [{ enum: [1], title: "Freelance - Hungary", type: "number" }],
                title: "Legal Form",
                type: "number",
            },
            legalName: { title: "Company Name", type: "string" },
            personalName: { title: "Full Name", type: "string" },
        },
        required: [
            "personalName",
            "legalForm",
            "legalAddress",
            "email",
            "isTermsAccepted",
        ],
        type: "object",
    },
    SCHEMA_PROP: "schema",
    SUBMIT_EVENT: "submit",
}