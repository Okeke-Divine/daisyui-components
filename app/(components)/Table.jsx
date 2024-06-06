import React from "react";

const Table = () => {
  return (
    <>
      <div>
        <h1>Table</h1>
        <div>
          <div className="overflow-x-auto">
            <table className="table table-zebra">
              <thead>
                <tr>
                  <th>
                    <label>
                      <input type="checkbox" class="checkbox" />
                    </label>
                  </th>
                  <th>Name</th>
                  <th>Age</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    {" "}
                    <label>
                      <input type="checkbox" class="checkbox" />
                    </label>
                  </td>
                  <td>Kayks</td>
                  <td>12</td>
                </tr>
                <tr className="hover">
                  <td>
                    {" "}
                    <label>
                      <input type="checkbox" class="checkbox" />
                    </label>
                  </td>
                  <td>Divine</td>
                  <td>17</td>
                </tr>
                <tr>
                  <td>
                    {" "}
                    <label>
                      <input type="checkbox" class="checkbox" />
                    </label>
                  </td>
                  <td>
                    Zemlak, Daniel and Leannon
                    <br />
                    <span class="badge badge-ghost badge-sm">
                      Desktop Support Technician
                    </span>
                  </td>
                  <td>18</td>
                </tr>
                <tr>
                  <td>
                    {" "}
                    <label>
                      <input type="checkbox" class="checkbox" />
                    </label>
                  </td>
                  <td>
                    <div class="flex items-center gap-3">
                      <div class="avatar">
                        <div class="mask mask-squircle w-12 h-12">
                          <img
                            src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png"
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div class="font-bold">Hart Hagerty</div>
                        <div class="text-sm opacity-50">United States</div>
                      </div>
                    </div>
                  </td>
                  <td>18+</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <hr />
        <div className="overflow-x-auto h-96">
          <table className="table table-pin-rows">
            <thead>
              <tr>
                <th>A</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Ant-Man</td>
              </tr>
              <tr>
                <td>Aquaman</td>
              </tr>
              <tr>
                <td>Asterix</td>
              </tr>
              <tr>
                <td>The Atom</td>
              </tr>
              <tr>
                <td>The Avengers</td>
              </tr>
            </tbody>
            <thead>
              <tr>
                <th>B</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Batgirl</td>
              </tr>
              <tr>
                <td>Batman</td>
              </tr>
              <tr>
                <td>Batwoman</td>
              </tr>
              <tr>
                <td>Black Canary</td>
              </tr>
              <tr>
                <td>Black Panther</td>
              </tr>
            </tbody>
            <thead>
              <tr>
                <th>C</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Captain America</td>
              </tr>
              <tr>
                <td>Captain Marvel</td>
              </tr>
              <tr>
                <td>Catwoman</td>
              </tr>
              <tr>
                <td>Conan the Barbarian</td>
              </tr>
            </tbody>
            <thead>
              <tr>
                <th>D</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Daredevil</td>
              </tr>
              <tr>
                <td>The Defenders</td>
              </tr>
              <tr>
                <td>Doc Savage</td>
              </tr>
              <tr>
                <td>Doctor Strange</td>
              </tr>
            </tbody>
            <thead>
              <tr>
                <th>E</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Elektra</td>
              </tr>
            </tbody>
            <thead>
              <tr>
                <th>F</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Fantastic Four</td>
              </tr>
            </tbody>
            <thead>
              <tr>
                <th>G</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Ghost Rider</td>
              </tr>
              <tr>
                <td>Green Arrow</td>
              </tr>
              <tr>
                <td>Green Lantern</td>
              </tr>
              <tr>
                <td>Guardians of the Galaxy</td>
              </tr>
            </tbody>
            <thead>
              <tr>
                <th>H</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Hawkeye</td>
              </tr>
              <tr>
                <td>Hellboy</td>
              </tr>
              <tr>
                <td>Incredible Hulk</td>
              </tr>
            </tbody>
            <thead>
              <tr>
                <th>I</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Iron Fist</td>
              </tr>
              <tr>
                <td>Iron Man</td>
              </tr>
            </tbody>
            <thead>
              <tr>
                <th>M</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Marvelman</td>
              </tr>
            </tbody>
            <thead>
              <tr>
                <th>R</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Robin</td>
              </tr>
              <tr>
                <td>The Rocketeer</td>
              </tr>
            </tbody>
            <thead>
              <tr>
                <th>S</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>The Shadow</td>
              </tr>
              <tr>
                <td>Spider-Man</td>
              </tr>
              <tr>
                <td>Sub-Mariner</td>
              </tr>
              <tr>
                <td>Supergirl</td>
              </tr>
              <tr>
                <td>Superman</td>
              </tr>
            </tbody>
            <thead>
              <tr>
                <th>T</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Teenage Mutant Ninja Turtles</td>
              </tr>
              <tr>
                <td>Thor</td>
              </tr>
            </tbody>
            <thead>
              <tr>
                <th>W</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>The Wasp</td>
              </tr>
              <tr>
                <td>Watchmen</td>
              </tr>
              <tr>
                <td>Wolverine</td>
              </tr>
              <tr>
                <td>Wonder Woman</td>
              </tr>
            </tbody>
            <thead>
              <tr>
                <th>X</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>X-Men</td>
              </tr>
            </tbody>
            <thead>
              <tr>
                <th>Z</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Zatanna</td>
              </tr>
              <tr>
                <td>Zatara</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Table;
