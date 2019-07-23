import { createSelector } from 'reselect';
import { store } from './store';
import { isFlowPredicate } from '@babel/types';
Array.prototype.in_array = function (e) {
  var r=new RegExp(','+e+',');
  return (r.test(',' + this.join(this.S) + ','));
};
const getStateData = (state, ownProps) => state.data
const getStateFilter = (state, ownProps) => state.filter


export const selectMovies = createSelector(
  [getStateData, getStateFilter],
  (data, filter) => {
    if (JSON.stringify(filter) == '{}' || filter==undefined)
      return data;
    else {
      var res = [];
      var temp=[];
      for (var key in filter) {
        temp=(res.length==0)?data:res;
        switch (key) {
          case "genres":
              if (filter[key] != "ALL") {
              res = temp.filter(
                (e) => { 
                  if(e[key]!=null)
                    return (e[key].in_array(filter[key])) }
              )}else{
                res = temp.filter(                  
                  (e) => { 
                    if(e[key]!=null)
                    return (!e[key].in_array(filter[key])) }
                )
              }
              break;
            case "rating":
                if (filter[key] != "ALL") {
                  res = temp.filter(
                    (e) => { return (e[key]>=parseFloat(filter[key])) }
                  )}else
                  {
                    res = temp.filter(
                      (e) => { return (e[key]>=0) }
                    )}
              break;
            default:
                if (filter[key] != "ALL") {
                  res = temp.filter(
                    (e) => { return (e[key] == filter[key]) }
                  );
                } else
                {
                  res = temp.filter(
                    (e) => { return (e[key] != filter[key]) }
                  );
                } 
               break;
      
      } 

      }
      return res;
    }
  });