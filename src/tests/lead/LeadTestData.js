const LEAD_LIST = [
  {
    firstName: "Bob",
    email: "bob@unclebob.com",
    interest: "Working for KodeKonveyor",
  },
  {
    firstName: "Martin",
    email: "martin@martinfowler.com",
    interest: "Working for KodeKonveyor",
  },
];

export const LeadTestData = {
  LEAD_LIST,
  RELOAD_ACTION: { type: "LEAD_LIST_RELOAD" },
  LOAD_ACTION: { type: "LEAD_LIST_LOAD", leadList: LEAD_LIST },
  ERROR_ACTION: { type: "LEAD_LIST_ERROR" },

  FIRST_NAME: "György",
  EMAIL: "soros@osf.org",
  INTEREST: "Open society",

  EMPTY_STATE: { leadList: [], loading: true },
  LOADED_STATE: { leadList: LEAD_LIST, loading: false },

  HEADER_CLASS: ".header",
  RELOAD_CLASS: ".reload",
  EXPORT_CLASS: ".export",
  FILENAME: "filename",
  EXPECTED_CSS:
    "Bob,bob@unclebob.com,Working for KodeKonveyor" +
    "\r\nMartin,martin@martinfowler.com,Working for KodeKonveyor",
  EXPECTED_FILENAME: "kk_lead_list.csv",
  LOADING_MESSAGE: "Loading...",
  CLICK_EVENT: "click",
  DATA: "data",
};
