import { useContext } from "react";
import "../css/Home.css";
import "../css/HomeQuery.css";
import { MyContext } from "./MyContext";
import Loader from "./Loader";

export default function Home() {
  const { data, loader } = useContext(MyContext);
  const {
    avatar_url,
    bio,
    company,
    name,
    login,
    email,
    followers,
    following,
    location,
    public_repos,
    updated_at,
    created_at,
  } = data;
  return (
    <section className="sectionContent">
      {data == "" ? (
        <h1 style={{ textAlign: "center", marginTop: "10rem" }}>
          Type the name of a person you want to find.
        </h1>
      ) : loader ? (
        <Loader />
      ) : data == null || data.status == "404" ? (
        <h1 style={{ textAlign: "center", marginTop: "10rem" }}>
          No result found!
        </h1>
      ) : (
        <div className="mainContent">
          <img src={avatar_url} alt="" id="userImg" />
          <div className="homeContent">
            <h3 className="content">
              <div>
                <span>Name: </span>
                <span className="font-500">
                  {" "}
                  {name || login || "Not available"}
                </span>
              </div>
            </h3>
            <p className="content">
              <div>
                <span>Bio: </span>
                <span className="font-500"> {bio || "Not available"}</span>
              </div>
            </p>
            <p className="content">
              <div>
                <span>Email: </span>
                <span className="font-500"> {email || "Not available"}</span>
              </div>
            </p>
            <p className="content">
              <div>
                <span>Follower: </span>
                <span className="font-500">
                  {" "}
                  {followers || "Not available"}
                </span>
              </div>
              <span className="span_content">
                <span>Following: </span>
                <span className="font-500">
                  {" "}
                  {following || "Not available"}
                </span>
              </span>
            </p>
            <p className="content">
              <div>
                <span>Location: </span>
                <span className="font-500"> {location || "Not available"}</span>
              </div>
              <span className="span_content">
                <span>Company: </span>
                <span className="font-500"> {company || "Not available"}</span>
              </span>
            </p>
            <p className="content">
              <div>
                <span>Login as: </span>
                <span className="font-500"> {login || "Not available"}</span>
              </div>
              <span className="content">
                <span>Public Repos: </span>
                <span className="font-500">
                  {" "}
                  {public_repos || "Not available"}
                </span>
              </span>
            </p>
            <p className="content">
              <div>
                <span>Account Created: </span>
                <span className="font-500">
                  {" "}
                  {new Date(created_at).toDateString() || "Not available"}
                </span>
              </div>
              <span className="span_content">
                <span>Updated at: </span>
                <span className="font-500">
                  {" "}
                  {new Date(updated_at).toDateString() || "Not available"}
                </span>
              </span>
            </p>
          </div>
        </div>
      )}
    </section>
  );
}