function sidebar() {
  // return your html component here
  //Make sure to give input search box id as "searchbar"
  return `<div>
  <div class="blogtext">
    <p>Blog Search</p>
  </div>
  <div class="login"><p>Login</p></div>
  <div class="searchbox"><input type="search" name="search" id="searchbar" placeholder="Search Blog"></div>
  <div class="sametext">
    <p>Startups</p>
  </div>
  <div class="sametext">
    <p>blogletters</p>
  </div>
  <div class="sametext">
    <p>Audio</p>
  </div>
  <div class="sametext">
    <p>Video</p>
  </div>
</div>`
}
export default sidebar;
