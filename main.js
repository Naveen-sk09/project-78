var images = ["home.jpg","father.jpg","mother.jpg","grandpa.png","grandma.png","sister.jpg"]
var names = ["Family Book","senthil kumar", "Vimala", "Maran", "Nallamal", "Chanasya"];
var i = 0;
function update()
{
   
    var numbers_of_family_member_in_array = 5;
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;

      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
   
 
    document.getElementById("family_member_image").src = images[i];
    document.getElementById("family_member_name").innerHTML = names[i];
    i++; 
}
