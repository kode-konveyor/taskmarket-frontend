export const LEAD_LIST = [
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

export const RELOAD_ACTION = { type: "LEAD_LIST_RELOAD" };
export const LOAD_ACTION = { type: "LEAD_LIST_LOAD", leadList: LEAD_LIST };
export const ERROR_ACTION = { type: "LEAD_LIST_ERROR" };

export const FIRST_NAME = "György";
export const EMAIL = "soros@osf.org";
export const INTEREST = "Open society";

export const EMPTY_STATE = { leadList: [], loading: true };
export const LOADED_STATE = { leadList: LEAD_LIST, loading: false };
