let slides = [];

// grab all of the slides in the directory
// stop looking when we hit a number that doesn't resolve
for (let i = 1; ; i++) {
  try {
    slides.push (require ('./' + i));
  } catch (error) {
    break;
  }
}

export default slides;
