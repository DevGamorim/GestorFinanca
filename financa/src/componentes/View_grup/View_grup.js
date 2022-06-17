import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Parser from 'html-react-parser';

function View_grup() {
  var append_ = ''
  for (var a = 0; a > 15; a++){
    append_ = append_ + '<div className="col-sm-3">aaaaaaaaa<div/>';
  };

  return <>
    <div className="row">
      aaaaabbb
      {Parser(append_)}
    </div>
      
  </>
}
  
export default View_grup;