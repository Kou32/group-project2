const discussions = [
    {
      movieId: "tt0111161",
      topic: "Favorite Scene in The Shawshank Redemption",
      comments: [
        {
          userId: 1,
          userName: "Alice",
          comment: "The ending was just perfect.",
          replies: [
            {
              userId: 2,
              userName: "Bob",
              reply: "I agree! The twist was amazing."
            },
            {
              userId: 3,
              userName: "Charlie",
              reply: "It gave me chills."
            }
          ]
        },
        {
          userId: 4,
          userName: "Dave",
          comment: "The prison escape scene was intense.",
          replies: []
        }
      ]
    }
  ];
  
  function renderDiscussions(discussions) {
    const discussionContainer = document.getElementById('discussion-container');
  
    discussions.map(discussion => {
      const topicElement = document.createElement('div');
      topicElement.className = 'discussion-topic';
      topicElement.innerHTML = `<h3>${discussion.topic}</h3>`;
  
      const comments = discussion.comments.map(comment => {
        const commentElement = document.createElement('div');
        commentElement.className = 'comment';
        commentElement.innerHTML = `
          <strong>${comment.userName}</strong>: ${comment.comment}
        `;
  
        const replies = comment.replies.map(reply => {
          const replyElement = document.createElement('div');
          replyElement.className = 'reply';
          replyElement.innerHTML = `
            <strong>${reply.userName}</strong>: ${reply.reply}
          `;
          return replyElement;
        });
  
        replies.forEach(reply => {
          commentElement.appendChild(reply);
        });
  
        return commentElement;
      });
  
      comments.forEach(comment => {
        topicElement.appendChild(comment);
      });
  
      discussionContainer.appendChild(topicElement);
    });
  }
  
  renderDiscussions(discussions);