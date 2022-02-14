// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {
  $chats: $('#chats'),

  initialize: function () {
    // TODO: Perform any work which needs to be done
    // when this view loads.
  },

  render: function () {
    // TODO: Render _all_ the messages.
    var html = '';
    for (let id in Messages._data) {
      html += MessageView.render(Messages._data[id]);
    }
    this.$chats.append(html);
  },

  renderMessage: function (message) {
    // TODO: Render a single message.
    return this.$chats.append(MessageView.render(message));
  },

  handleClick: function (username) {
    console.log(username);
    Friends.toggleStatus(username);
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
  },
};
