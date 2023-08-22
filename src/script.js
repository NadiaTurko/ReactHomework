const domContainer = document.querySelector("#root");
const root = ReactDOM.createRoot(domContainer);

const titleCars = "Car Specs";
const CARS = [
  {
    id: 1,
    brand: "Audi",
    models: [
      {
        id: 1,
        name: "A1",
        collection: [
          {
            id: 1,
            version: "Sportback",
            year: 2019,
            horsepower: 95,
            engine: 999,
          },
          {
            id: 2,
            version: "Citycarver",
            year: 2019,
            horsepower: 95,
            engine: 999,
          },
        ],
      },
      {
        id: 2,
        name: "Q5",
        collection: [
          {
            id: 1,
            version: "FY 2021",
            year: 2021,
            horsepower: 299,
            engine: 1984,
          },
          {
            id: 2,
            version: "Sportback",
            year: 2021,
            horsepower: 299,
            engine: 1984,
          },
        ],
      },
      {
        id: 3,
        name: "TT",
        collection: [
          {
            id: 1,
            version: "Coupe",
            year: 2021,
            horsepower: 197,
            engine: 1984,
          },
          {
            id: 2,
            version: "Roadster",
            year: 2021,
            horsepower: 197,
            engine: 1984,
          },
        ],
      },
    ],
  },
  {
    id: 2,
    brand: "BMW",
    models: [
      {
        id: 1,
        name: "8 series",
        collection: [
          {
            id: 1,
            version: "G1X LCI",
            year: 2022,
            horsepower: 333,
            engine: 2998,
          },
          {
            id: 2,
            version: "G1X",
            year: 2019,
            horsepower: 340,
            engine: 2998,
          },
        ],
      },
      {
        id: 2,
        name: "X6",
        collection: [
          {
            id: 1,
            version: "G06 LCI",
            year: 2023,
            horsepower: 530,
            engine: 4395,
          },
          {
            id: 2,
            version: "G06",
            year: 2020,
            horsepower: 286,
            engine: 2993,
          },
        ],
      },
    ],
  },
];

const CarsTable = (
  <React.Fragment>
    <h1>{titleCars}</h1>
    <table>
      <tbody>
        {CARS.map((mark, index) => (
          <tr key={index}>
            <td>{mark.brand}</td>
            {mark.models.map((carModel, i) => (
              <tr key={i}>
                <td>{carModel.name}</td>
                <td>
                  {carModel.collection.map(
                    (collectionItem, collectionIndex) => (
                      <ul key={collectionIndex}>
                        <li>Version: {collectionItem.version}</li>
                        <li>Year: {collectionItem.year}</li>
                        <li>Horsepower: {collectionItem.horsepower}</li>
                        <li>Engine: {collectionItem.engine}</li>
                      </ul>
                    )
                  )}
                </td>
              </tr>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </React.Fragment>
);
root.render(CarsTable);
