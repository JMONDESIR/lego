const eventListeners = {
  handleFormSubmission() {
    // Get input values
    const creator = document.querySelector("#lego__creator").value;
    const name = document.querySelector("#lego__name").value;
    const shape = document.querySelector("#lego__shape").value;
    const color = document.querySelector("#lego__color").value;

    const legoObject = {
      creatorName: creator,
      legoName: name,
      legoColor: color,
      legoShape: shape
    };
    data.postLego(legoObject);
  }
};
