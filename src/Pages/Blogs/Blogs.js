import React from "react";

const Blogs = () => {
  return (
    <div>
      <div className="collapse">
        <input type="checkbox" className="peer" />
        <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
          1. What is the difference between SQL and NoSQL?
        </div>
        <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
          <p>
            Ans: SQL databases are relational, NoSQL databases are non-relational.
            SQL databases use structured query language and have a predefined
            schema. NoSQL databases have dynamic schemas for unstructured data.
            SQL databases are vertically scalable, while NoSQL databases are
            horizontally scalable.
          </p>
        </div>
      </div>
      <div className="collapse">
        <input type="checkbox" className="peer" />
        <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
          2. What is JWT , and how does it work?
        </div>
        <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
          <p>
            Ans: JWTs are digitally signed using either a secret (HMAC) or a
            public/private key pair (RSA or ECDSA) which safeguards them from
            being modified by the client or an attacker. Stored only on the
            client: You generate JWTs on the server and send them to the client{" "}
          </p>
        </div>
      </div>
      <div className="collapse">
        <input type="checkbox" className="peer" />
        <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
          3. What is the difference between javscriptand NodeJS?
        </div>
        <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
          <p>
            Ans: NodeJS is a runtime environment built on Google's v8 engine, whereas
            JavaScript is a real high-level programming language used to develop
            web scripts. While Node. js enables us to run JavaScript outside of
            the browser, JavaScript is often executed within the browser.
          </p>
        </div>
      </div>
      <div className="collapse">
        <input type="checkbox" className="peer" />
        <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
          4. How does NodeJS handle multiple request at the same time?
        </div>
        <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
          <p>
            Ans: How NodeJS handle multiple client requests? NodeJS receives multiple
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

export default Blogs;
