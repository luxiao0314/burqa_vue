var stringUtil = {
   getTags: function(tags) {
    var tag_tags = "";
    if (tags != null) {
      tags.forEach(element => {
        tag_tags += element + " ";
      });
    }
    return tag_tags;
  }
}

export default stringUtil;
