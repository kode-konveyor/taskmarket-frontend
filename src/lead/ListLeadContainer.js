import { connect } from "react-redux";
import ListLeadUi from "./ListLeadUI";
import LeadLoadService from "./LeadLoadService";

function mapStateToProps(state) {
  return {
    leadList: state.LeadList.leadList,
    loading: state.LeadList.loading,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onLoad: () => {
      dispatch(LeadLoadService());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ListLeadUi);
