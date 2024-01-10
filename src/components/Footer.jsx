function Footer() {
  return (
    <>
      <footer className="container bg-primary">
        <div className="row">
          <div className="col p-1 d-flex img-container">
            <a
              href="https://www.linkedin.com/in/elvis-birifa"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/images/linkedin.svg" alt="" />
            </a>
            <a
              href="https://github.com/luciphoenix"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/images/github.svg" alt="" />
            </a>
            <a
              href="https://x.com/elvis_phoenix"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/images/twit-x.svg" alt="" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
