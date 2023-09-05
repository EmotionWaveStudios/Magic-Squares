const App = () => {
  function checkAnswer() {
    let blockOne = parseInt(document.getElementById("1x1").value);
    let blockTwo = parseInt(document.getElementById("1x2").value);
    let blockThree = parseInt(document.getElementById("1x3").value);
    let blockFour = parseInt(document.getElementById("2x1").value);
    let blockFive = parseInt(document.getElementById("2x2").value);
    let blockSix = parseInt(document.getElementById("2x3").value);
    let blockSeven = parseInt(document.getElementById("3x1").value);
    let blockEight = parseInt(document.getElementById("3x2").value);
    let blockNine = parseInt(document.getElementById("3x3").value);

    if (
      blockOne + blockTwo + blockThree &&
      blockOne + blockFive + blockSix &&
      blockOne + blockFour + blockSeven &&
      blockTwo + blockFive + blockEight &&
      blockFour + blockFive + blockSix &&
      blockSeven + blockNine + blockEight &&
      blockThree + blockSix + blockNine &&
      blockThree + blockFive + blockSeven === 15
    ) {
      document.getElementById("verification").innerText =
        "Your magic square is correct";
    } else if (
      blockOne + blockTwo + blockThree ||
      blockOne + blockFive + blockSix ||
      blockOne + blockFour + blockSeven ||
      blockTwo + blockFive + blockEight ||
      blockFour + blockFive + blockSix ||
      blockSeven + blockNine + blockEight ||
      blockThree + blockSix + blockNine ||
      blockThree + blockFive + blockSeven !== 15
    ) {
      document.getElementById("verification").innerText =
        "Your magic square is incorrect";
    }
  }

  return (
    <div className="text-center pt-[100px]">
      <div id="row-1">
        <input
          id="1x1"
          type="number"
          className="text-center border-black border-2 p-4 text-2xl"
          min={1}
          max={9}
        />

        <input
          id="1x2"
          type="number"
          className="text-center border-black border-2 p-4 text-2xl"
          min={1}
          max={9}
        />

        <input
          id="1x3"
          type="number"
          className="text-center border-black border-2 p-4 text-2xl"
          min={1}
          max={9}
        />
      </div>

      <div id="row-2">
        <input
          id="2x1"
          type="number"
          className="text-center border-black border-2 p-4 text-2xl"
          min={1}
          max={9}
        />

        <input
          id="2x2"
          type="number"
          className="text-center border-black border-2 p-4 text-2xl"
          min={1}
          max={9}
        />

        <input
          id="2x3"
          type="number"
          className="text-center border-black border-2 p-4 text-2xl"
          min={1}
          max={9}
        />
      </div>

      <div id="row-3">
        <input
          id="3x1"
          type="number"
          className="text-center border-black border-2 p-4 text-2xl"
          min={1}
          max={9}
        />

        <input
          id="3x2"
          type="number"
          className="text-center border-black border-2 p-4 text-2xl"
          min={1}
          max={9}
        />

        <input
          id="3x3"
          type="number"
          className="text-center border-black border-2 p-4 text-2xl"
          min={1}
          max={9}
        />
      </div>

      <button
        id="check-answer"
        onClick={checkAnswer}
        className="text-center border-black border-2 rounded-xl py-2 px-3 m-4 text-lg font-bold"
      >
        Check Magic Square
      </button>
    </div>
  );
};

export default App;
