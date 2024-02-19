export function ListItem({ stuff }: { stuff: string[] }) {
  return (
    <ul>
      {stuff.map((item, index) => {
        return (
          <li key={index}>
            {item} {index !== 2 && "✔"}
          </li>
        );
      })}
    </ul>
  );
}
