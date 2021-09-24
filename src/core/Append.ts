/**
 *
 *
 * @export
 * @class AppendFunctionFactory
 */
export class AppendFunctionFactory {
  /**
     *
     * @param {string} type
     * @return {Function}
     */
  create(type:string): Function {
    return () =>{

    };
  }

  /**
   *
   *
   * @param {string} eleType
   * @return {*}  {HTMLElement}
   * @memberof AppendFunctionFactory
   */
  createElement(eleType:string):HTMLElement {
    const ele = document.createElement(eleType);
    return ele;
  }
}

export const appendFlex = ()=>{

};
