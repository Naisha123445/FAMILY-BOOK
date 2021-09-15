var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","IMG_0985.jpg", "IMG-0299.jpg" , "IMG_1011.jpg", "IMG-0309.jpg" ];
var names = ["Fmaily Book","Vaibhav Mittal", "Namrata Mittal", "Naisha Mittal", "Mihika Mittal"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = images[i];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = names[i] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
