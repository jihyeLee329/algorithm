function likes(names) {
    // TODO
    const LIKES_THIS = 'likes this';
    const LIKE_THIS ='like this';
    switch(names.length){
      case 0 : return `no one ${LIKES_THIS}`;
      case 1 : return `${names} ${LIKES_THIS}`;
      case 2 : return `${names[0]} and ${names[1]} ${LIKE_THIS}`;
      case 3 : return `${names[0]}, ${names[1]} and ${names[2]} ${LIKE_THIS}`;
      default : return `${names[0]}, ${names[1]} and ${names.length - 2} others ${LIKE_THIS}`;
    }
}