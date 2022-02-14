// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {
  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function () {
    // TODO: Perform any work which needs to be done
    // when this view loads.
  },

  render: function () {
    // TODO: Render out the list of rooms.
    this.$select.empty();
    Rooms.forEach((roomName) => this.renderRoom(roomName));
    this.$button.on('click', () => {
      RoomsView.handleClick(this.$select[0].value);
    });
  },

  renderRoom: function (roomName) {
    // TODO: Render out a single room.
    if (!roomName) return;
    var $room = $(`<option value="${roomName}">${roomName}</option>`);
    this.$select.append($room);
  },

  handleChange: function (event) {
    Rooms.selected = event.target.value;
  },

  handleClick: function (roomName) {
    // TODO: Handle the user clicking the "Add Room" button.
    Rooms.add(roomName);
    this.render();
  },
};
