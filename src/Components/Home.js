import React, { useContext, useState } from "react";
import hassanjavaid from "../Photos/Hassanjavaid.jpeg";
import "../CSS/Home.css";
import "../CSS/HomeQuery.css";
import no_image_avaliale from "../Photos/no-image-available.jpg";
import { MyContext } from "./MyContext";

export default function Home() {
  const { data, setData, setelement, element, searchQuery, setsearchquery } =
    useContext(MyContext);
  let date = new Date(data.updated_at);
  let getyear = date.getFullYear();
  let getmonth = date.getMonth();
  let getday = date.getDay();
  return (
    <>
      <div className="mainContent">
        <div id="homeContainer">
          {searchQuery == "" ||
          searchQuery == null ||
          searchQuery == undefined ? (
            <h1>
              Search Github User!
              <span id="developer">Developed by Hassanjavaid!</span>
            </h1>
          ) : (
            <>
              <div className="home_img">
                <img
                  src={
                    data.avatar_url === null ||
                    data.avatar_url == undefined ||
                    data.avatar_url == ""
                      ? no_image_avaliale
                      : data.avatar_url
                  }
                  alt=""
                  id="hassanjavaid"
                />
              </div>
              <div className="homeContent">
                <h3 className="name">
                  <span>Name:</span>{" "}
                  {data.name == null || undefined || ""
                    ? "No Info..."
                    : data.name}
                </h3>
                <p className="bio">
                  <span>Bio:</span>{" "}
                  {data.bio == null || undefined || ""
                    ? "No Info..."
                    : data.bio}
                </p>
                <p className="email">
                  <span>Email:</span>{" "}
                  {data.email == null || undefined || ""
                    ? "No Email Info..."
                    : data.email}
                </p>
                <p className="span_content">
                  <span>Follower:</span>{" "}
                  {data.followers == null || undefined || ""
                    ? "No Info..."
                    : data.followers}{" "}
                  <span className="span_content">
                    <span>Following:</span>{" "}
                    {data.following == null || undefined || ""
                      ? "No Info..."
                      : data.following}
                  </span>
                </p>
                <p className="location">
                  <span>Location:</span>{" "}
                  {data.location == null || undefined || ""
                    ? "No Info..."
                    : data.location}{" "}
                  <span className="span_content">
                    <span>Company:</span>{" "}
                    {data.company == null || undefined || ""
                      ? "No Info..."
                      : data.company}
                  </span>
                </p>
                <p className="login">
                  <span>Login as:</span>{" "}
                  {data.login == null || undefined || ""
                    ? "No Info..."
                    : data.login}{" "}
                  <span className="span_content">
                    <span>Public Repos:</span>{" "}
                    {data.public_repos == null || undefined || ""
                      ? "No Info..."
                      : data.public_repos}
                  </span>
                </p>
                <p className="span_content">
                  <span>Account Created:</span>{" "}
                  {parseInt(
                    data.created_at == null || undefined || ""
                      ? "No Info..."
                      : data.created_at
                  )}{" "}
                  <span className="span_content">
                    <span>Updated at:</span>{" "}
                    {data.updated_at == null || undefined || ""
                      ? "No Info..."
                      : `${getday}/${getmonth}/${getyear}`}
                  </span>
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
