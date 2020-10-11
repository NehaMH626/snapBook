import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { allAlbum, fetchAll } from "../container/Home/HomeActions";
import { Table, Button, Row } from "react-bootstrap";

class Datatable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      responseData: "",
      allAlbumLength: "",
      prevStartIndex: 0,
      nextStartIndex: 0,
      removedID: [],
    };
  }

  componentDidMount() {
    this.props.fetchAll_API();
    this.props.getAllAlbum_API(0);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.albumResponse !== this.props.albumResponse) {
      let data = this.props.albumResponse;
      let removedID = this.state.removedID;
      var updatedData = data.filter(function (data) {
        return !removedID.find(function (id) {
          return data.id === id;
        });
      });

      this.setState({ responseData: updatedData });
    }
    if (prevProps.fetchAllResponse !== this.props.fetchAllResponse) {
      this.setState({ allAlbumLength: this.props.fetchAllResponse });
    }
  }

  prevDataset = () => {
    let startIndex = this.state.nextStartIndex;
    if (startIndex > 0) {
      startIndex = startIndex - 10;
      this.setState({ prevStartIndex: startIndex });
      this.setState({ nextStartIndex: startIndex });
      this.props.getAllAlbum_API(startIndex);
    }
  };
  nextDataset = () => {
    let startIndex = this.state.nextStartIndex;

    if (startIndex <= 4990) {
      startIndex = startIndex + 10;

      this.setState({ nextStartIndex: startIndex });
      this.props.getAllAlbum_API(startIndex);
    }
  };
  deleteRow = (idToRemove) => {
    let removedID = this.state.removedID;
    removedID.push(idToRemove);
    this.setState({ removedID: removedID });
    let data = this.state.responseData;
    let updatedData = data.filter((item) => item.id !== idToRemove);
    this.setState({ responseData: updatedData });
  };

  render() {
    return (
      <div className="table-container">
        <Row>
          {" "}
          <Button
            variant="info"
            className="btn prev-btn"
            onClick={() => this.prevDataset()}
            style={
              this.state.nextStartIndex === 0
                ? { backgroundColor: "#7b7b7b" }
                : { backgroundColor: "#458c40" }
            }
          >
            Prev
          </Button>
          <Button
            variant="info"
            className="btn"
            onClick={() => this.nextDataset()}
            style={
              this.state.nextStartIndex < 5000
                ? { backgroundColor: "#458c40" }
                : { backgroundColor: "#7b7b7b" }
            }
          >
            Next
          </Button>{" "}
          {/* <p>
            {this.state.allAlbumLength.length
              ? this.state.allAlbumLength.length
              : null}
          </p> */}
        </Row>
        <Row>
          <Table striped bordered responsive>
            <tbody>
              {this.state.responseData.length
                ? this.state.responseData?.map((data, index) => {
                    return (
                      <tr key={index}>
                        <td className="dataTable-td">#{data.id}</td>
                        <td className="dataTable-td">{data.title}</td>
                        <td>
                          <img src={data.thumbnailUrl}></img>
                        </td>
                        <td>
                          <Button onClick={() => this.deleteRow(data.id)}>
                            Delete
                          </Button>
                        </td>
                      </tr>
                    );
                  })
                : null}
            </tbody>
          </Table>
        </Row>
      </div>
    );
  }
}
const mapStateToProps = (store) => {
  return {
    stringLiterals: store.stringLiterals,
    albumResponse: store.HomeReducer.albumResponse,
    fetchAllResponse: store.HomeReducer.fetchAllResponse,
  };
};
const mapDispatchToProps = (dispatch) => ({
  getAllAlbum_API: (payload) => dispatch(allAlbum(payload)),
  fetchAll_API: (payload) => dispatch(fetchAll(payload)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Datatable));
//export default Datatable;
