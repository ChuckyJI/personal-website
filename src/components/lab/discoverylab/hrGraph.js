import "./hrGraph.css";
import React, { useEffect } from "react";

function Weiming() {
  useEffect(() => {
    const handleToggle = (e) => {
      const parent = e.currentTarget;
      const children = parent.parentElement.querySelector("ul");
      if (children.style.display === "none" || children.style.display === "") {
        children.style.display = "block";
      } else {
        children.style.display = "none";
      }
      e.stopPropagation();
    };

    const parents = document.querySelectorAll("ul.tree li.parent_li > span");

    parents.forEach((parent) => {
      parent.addEventListener("click", handleToggle);
    });

    return () => {
      parents.forEach((parent) => {
        parent.removeEventListener("click", handleToggle);
      });
    };
  }, []);

  return (
    <div style={{ textAlign: "left" }}>
      <div style={{ padding: "60px 0px", textAlign: "center" }}>HR Demo</div>
      <ul class="tree">
        <li class="parent_li">
          <span>XX环保集团</span>
          <ul>
            <li class="parent_li">
              <span>集团总部</span>
              <ul>
                <li class="parent_li">
                  <span>行政部</span>
                  <ul>
                    <li class="parent_li">
                      <span>部门总监：AAAA</span>
                      <ul>
                        <li>
                          <span>员工：AAAA</span>
                        </li>
                        <li>
                          <span>员工：BBBB</span>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li class="parent_li">
                  <span>人力部</span>
                  <ul>
                    <li class="parent_li">
                      <span>部门总监：AAAA</span>
                      <ul>
                        <li>
                          <span>员工：AAAA</span>
                        </li>
                        <li>
                          <span>员工：BBBB</span>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li class="parent_li">
              <span>厂区</span>
              <ul>
                <li class="parent_li">
                  <span>江苏省</span>
                  <ul>
                    <li class="parent_li">
                      <span>扬州厂区</span>
                      <ul>
                        <li>
                          <span>厂长：AAA</span>
                        </li>
                        <li class="parent_li">
                          <span>生产科</span>
                          <ul>
                            <li class="parent_li">
                              <span>科长：AAAA</span>
                              <ul>
                                <li>
                                  <span>员工：AAAA</span>
                                </li>
                                <li>
                                  <span>员工：BBBB</span>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                        <li class="parent_li">
                          <span>质检科</span>
                          <ul>
                            <li class="parent_li">
                              <span>科长：AAAA</span>
                              <ul>
                                <li>
                                  <span>员工：AAAA</span>
                                </li>
                                <li>
                                  <span>员工：BBBB</span>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li class="parent_li">
                      <span>南京厂区</span>
                      <ul>
                        <li>
                          <span>厂长：AAA</span>
                        </li>
                        <li class="parent_li">
                          <span>生产科</span>
                          <ul>
                            <li class="parent_li">
                              <span>科长：AAAA</span>
                              <ul>
                                <li>
                                  <span>员工：AAAA</span>
                                </li>
                                <li>
                                  <span>员工：BBBB</span>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                        <li class="parent_li">
                          <span>质检科</span>
                          <ul>
                            <li class="parent_li">
                              <span>科长：AAAA</span>
                              <ul>
                                <li>
                                  <span>员工：AAAA</span>
                                </li>
                                <li>
                                  <span>员工：BBBB</span>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li class="parent_li">
                  <span>福建省</span>
                  <ul>
                    <li class="parent_li">
                      <span>福州厂区</span>
                      <ul>
                        <li>
                          <span>厂长：AAA</span>
                        </li>
                        <li class="parent_li">
                          <span>生产科</span>
                          <ul>
                            <li class="parent_li">
                              <span>科长：AAAA</span>
                              <ul>
                                <li>
                                  <span>员工：AAAA</span>
                                </li>
                                <li>
                                  <span>员工：BBBB</span>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                        <li class="parent_li">
                          <span>质检科</span>
                          <ul>
                            <li class="parent_li">
                              <span>科长：AAAA</span>
                              <ul>
                                <li>
                                  <span>员工：AAAA</span>
                                </li>
                                <li>
                                  <span>员工：BBBB</span>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li class="parent_li">
                      <span>厦门厂区</span>
                      <ul>
                        <li>
                          <span>厂长：AAA</span>
                        </li>
                        <li class="parent_li">
                          <span>生产科</span>
                          <ul>
                            <li class="parent_li">
                              <span>科长：AAAA</span>
                              <ul>
                                <li>
                                  <span>员工：AAAA</span>
                                </li>
                                <li>
                                  <span>员工：BBBB</span>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                        <li class="parent_li">
                          <span>质检科</span>
                          <ul>
                            <li class="parent_li">
                              <span>科长：AAAA</span>
                              <ul>
                                <li>
                                  <span>员工：AAAA</span>
                                </li>
                                <li>
                                  <span>员工：BBBB</span>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default Weiming;
