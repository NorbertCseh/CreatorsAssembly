import React from "react";

export default () => {
  return (
    <footer className="footer fix-footer">
      <div class="content has-text-centered">
        <p>
          <strong>Creators Assembly</strong> by{" "}
          <a href="https://github.com/NorbertCseh">NorbertCseh</a>.
        </p>
        Copyright &copy; {new Date().getFullYear()} Creators Assembly
      </div>
    </footer>
  );
};
