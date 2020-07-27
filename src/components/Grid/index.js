import React from "react";
import FriendCard from "../FriendCard";

const CardGrid = props => {
  return (
    <div className="friend-grid">
      {props.friends.map(friend => (
        <FriendCard
          clickCount={props.clickCount}
          id={friend.id}
          key={friend.id}
          image={friend.image}
        />
      ))}
    </div>
  );
};

export default CardGrid;
