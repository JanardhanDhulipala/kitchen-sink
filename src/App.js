import './App.css';
import ClassCounter from './components/useStateFolder/ClassCounter';
import ClassCounterOne from './components/useEffectFolder/ClassCounterOne';
import HookCounter from './components/useStateFolder/HookCounter';
import HookCounterFour from './components/useStateFolder/HookCounterFour';
import HookCounterOne from './components/useEffectFolder/HookCounterOne';
import HookCounterThree from './components/useStateFolder/HookCounterThree';
import HookCounterTwo from './components/useStateFolder/HookCounterTwo';
import HookMouse from './components/useEffectFolder/HookMouse';
import MouseContainer from './components/useEffectFolder/MouseContainer';
import IntervalHookCounter from './components/useEffectFolder/IntervalHookCounter';
import DataFetch from './components/useEffectFolder/DataFetch';

function App() {
  return (
    <div className="App">
      {/* <ClassCounter />
      <HookCounter />
      <HookCounterTwo />
      <HookCounterThree />
      <HookCounterFour />
      <ClassCounterOne />
      <HookCounterOne />
      <HookMouse />
      <MouseContainer />
      <IntervalHookCounter /> */}
      <DataFetch />
    </div>
  );
}

export default App;
