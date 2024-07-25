import React from "react";
import { ReactElement } from "react";
import styled from "styled-components";
type magicColor = "red" | "green" | "blue" | "white" | "black";
export const GameTracker = () => {
  return (
    <>
      <p> Hello Gamers</p>
      <TrackerTable />
    </>
  );
};
("");

type TrackerRow = {
  turn: number;
  startingLand: number;
  landPlayed: number;
  manaUsed: number;
  manaFloating: number;
  colorMissing: magicColor[];
};

const updateTable = (
  updatedValue: number | magicColor[],
  table: TrackerRow[],
  turn: number,
  updatedColumn:
    | "startingLand"
    | "landPlayed"
    | "manaUsed"
    | "manaFloating"
    | "colorMissing"
) => {
  const newTable = [...table];
  const alteredRow = newTable[turn - 1];

  if (typeof updatedValue == "number") {
    switch (updatedColumn) {
      case "startingLand":
        alteredRow.startingLand = updatedValue;
        break;
      case "landPlayed":
        alteredRow.landPlayed = updatedValue;
        break;
      case "manaUsed":
        alteredRow.manaUsed = updatedValue;
        break;

      case "manaFloating":
        alteredRow.manaFloating = updatedValue;
        break;
    }
  } else {
    alteredRow.colorMissing = updatedValue;
  }
  return newTable;
};

const ManaTick = styled.input<{ mColor: magicColor }>`
    background-color: ${(props) => {
      switch (props.mColor) {
        case "red":
          return "#FF0000";
        case "green":
          return "#00CC00";
        case "blue":
          return "#0000DD";
        case "white":
          return "#DDDDDD";
        case "black":
          return "#222222";
      }
    }};
    }}
    display: block;
    height: 50px;
    width: 50px;

`;
const AddNewRow = (table: TrackerRow[]): TrackerRow[] => {
  const newTable = [...table];
  newTable.push({
    turn: table[table.length - 1].turn + 1,
    startingLand: 1,
    landPlayed: 2,
    manaUsed: 3,
    manaFloating: 4,
    colorMissing: ["red"],
  });

  return newTable;
};
const ManaSelector = () => {
  return (
    <>
      <ManaTick mColor="green" type="checkbox" />
      <ManaTick mColor="red" type="checkbox" />
      <ManaTick mColor="blue" type="checkbox" />
      <ManaTick mColor="white" type="checkbox" />
      <ManaTick mColor="black" type="checkbox" />{" "}
    </>
  );
};

const TrackerTable = () => {
  const [tableRows, setTableRows] = React.useState<TrackerRow[]>([
    {
      turn: 1,
      startingLand: 1,
      landPlayed: 2,
      manaUsed: 3,
      manaFloating: 4,
      colorMissing: ["red"],
    },
  ]);

  return (
    <>
      <table>
        <tr>
          <th>Turn</th>
          <th>Starting Hand</th>
          <th>Played Land</th>
          <th>Mana Used</th>
          <th>Mana Floating</th>
          <th>Color Missing</th>
        </tr>

        {tableRows.map((tableRow) => {
          return (
            <tr>
              <td>{tableRow.turn}</td>
              <td>
                <input
                  type="number"
                  name="a"
                  value={tableRow.startingLand.toString()}
                  onChange={(e) => {
                    setTableRows(
                      updateTable(
                        Number(e.target.value),
                        tableRows,
                        tableRow.turn,
                        "startingLand"
                      )
                    );
                  }}
                />
              </td>

              <td>
                <input
                  type="number"
                  name="a"
                  value={tableRow.landPlayed.toString()}
                  onChange={(e) => {
                    setTableRows(
                      updateTable(
                        Number(e.target.value),
                        tableRows,
                        tableRow.turn,
                        "landPlayed"
                      )
                    );
                  }}
                />
              </td>
              <td>
                <input
                  type="number"
                  name="a"
                  value={tableRow.manaUsed.toString()}
                  onChange={(e) => {
                    setTableRows(
                      updateTable(
                        Number(e.target.value),
                        tableRows,
                        tableRow.turn,
                        "manaUsed"
                      )
                    );
                  }}
                />
              </td>
              <td>
                <input
                  type="number"
                  name="a"
                  value={tableRow.manaFloating.toString()}
                  onChange={(e) => {
                    setTableRows(
                      updateTable(
                        Number(e.target.value),
                        tableRows,
                        tableRow.turn,
                        "manaFloating"
                      )
                    );
                  }}
                />
              </td>
              <td>
                <ManaSelector />
              </td>
            </tr>
          );
        })}
      </table>

      <button
        onClick={() => {
          const newTable = AddNewRow(tableRows);
          setTableRows(newTable);
        }}
      >
        Add Turn
      </button>
    </>
  );
};

//const trackerRow = () => {};
