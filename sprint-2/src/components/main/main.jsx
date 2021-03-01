import React from "react";
import Header from "../header/header";
import HeroVideo from "../herovideo/herovideo";
import About from "../about/about";
import Form from "../form/form";
import Repository from "../repository/repository";
import SubVideo from "../subvideo/subvideo";
import data from "../data/video-details.json";
import "./main.scss";

class Main extends React.Component {
  //define state
  state = {
    topList: data[0],
    bottomList: data,
  };

  render() {
    return (
      <div className="main">
        <Header />
        <HeroVideo heroData={this.state.topList} />
        <div className="main__design">
          <div className="main__partition">
            <About aboutData={this.state.topList} />
            <Form />
            <Repository repositoryData={this.state.topList} />
          </div>
          <SubVideo
            subData={this.state.bottomList}
            clicked={this.clickHandler}
          />
        </div>
      </div>
    );
  }

  clickHandler = (identifier) => {
    let duplicate = [...this.state.bottomList];
    let position = duplicate.findIndex((subData) => {
      return subData.id === identifier;
    });

    let newList = duplicate.filter((bottomVideos) => {
      return bottomVideos.id !== identifier;
    });
    let selected = duplicate[position];
    newList.unshift(selected);
    this.setState({
      topList: data[position],
      bottomList: newList,
    });
  };
}

export default Main;
