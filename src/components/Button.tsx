function Button({
  text,
  handleOnClick,
}: {
  text: string;
  handleOnClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
}) {
  return <button onClick={handleOnClick}>{text}</button>;
}

export default Button;
