function EventDemo(): JSX.Element {
  return (
    <>
      <input onChange={(e) => console.log(e)} value={"I log my event"} />
      <br />
      <input
        onChange={(e) => console.log(e.target.value)}
        value={"I log my event.target.value"}
      />
      <br />

      <button onClick={(e) => console.log(e)}>I log my event</button>
    </>
  );
}

export default EventDemo;
