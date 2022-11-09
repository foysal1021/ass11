import React from "react";

const Blog = () => {
  return (
    <div
      className=" h-full  container mx-auto my-10 py-10 rounded-xl px-10"
      style={{
        backgroundImage: `url("https://i.ibb.co/3BxVjvt/16282276-rm222batch2-mind-03.jpg")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300  rounded-box"
      >
        <div className="collapse-title text-xl font-medium text-start">
          1 . Difference between SQL and NoSQL
        </div>
        <div className="collapse-content">
          <p>
            SQL is the programming language used to interface with relational
            databases. (Relational databases model data as records in rows and
            tables with logical links between them). NoSQL is a class of DBMs
            that are non-relational and generally do not use SQL.
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300  rounded-box"
      >
        <div className="collapse-title text-xl font-medium text-start">
          2 . What is JWT, and how does it work?
        </div>
        <div className="collapse-content">
          <p>
            JSON Web Token (JWT) is an open standard (RFC 7519) that defines a
            compact and self-contained way for securely transmitting information
            between parties as a JSON object. This information can be verified
            and trusted because it is digitally signed.
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300  rounded-box"
      >
        <div className="collapse-title text-xl font-medium text-start">
          3 . What is the difference between javascript and NodeJS?
        </div>
        <div className="collapse-content">
          <p>
            JavaScript is a simple programming language that can be used with
            any browser that has the JavaScript Engine installed. Node. js, on
            the other hand, is an interpreter or execution environment for the
            JavaScript programming language.
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300  rounded-box"
      >
        <div className="collapse-title text-xl font-medium text-start">
          4 . Difference between SQL and NoSQL
        </div>
        <div className="collapse-content">
          <p>
            How NodeJS handle multiple client requests? NodeJS receives multiple
            client requests and places them into EventQueue. NodeJS is built
            with the concept of event-driven architecture. NodeJS has its own
            EventLoop which is an infinite loop that receives requests and
            processes them.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
