import { Component } from 'react'
import { useSelector, useDispatch, connect } from 'react-redux'
import classes from './Counter.module.css';
import { counterActions } from '../store/counter';

//connect allows you to connect class based components with redux
const Counter = () => {
  // when we use "use" react-redux will automatically have access the subscription crom store
  // dispatch is used for actions

  const dispatch = useDispatch()
  const counter = useSelector(state => state.counter.counter)
  const show = useSelector(state => state.counter.showCounter)

  //actions
  const incrementHandler = () => {
    dispatch(counterActions.increment())
  } 
  const decrementHandler = () => {
    dispatch(counterActions.decrement())
  }
  const increaseHandler = () => {
    dispatch(counterActions.Increase(10))
  }
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter())
  }
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter

// class Counter extends Component{
//   incrementHandler() {
//     this.props.increment()
//   }
//   decrementHandler() {
//     this.props.decrement()
//   }
//   toggleCounterHandler() {}

//   render(){
//     return(
//       <main className={classes.counter}>
//       <h1>Redux Counter</h1>
//       <div className={classes.value}>{this.props.counter}</div>
//       <div>
//         <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//         <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//       </div>
//       <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//     </main>
//     )
//   }
// }

// //equivalent to useselector
// const mapStateToProps = state => {
//   return{
//     counter: state.counter
//   }
// }

// //equivqlent to useDispatch
// const mapDispatchToProps = dispatch => {
//   return{
//     increment: () => dispatch({ type: 'increment'}),
//     decrement: () => dispatch({ type: 'decrement'}),
//   }
// };
// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
