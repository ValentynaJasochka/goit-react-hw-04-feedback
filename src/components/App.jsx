import { Feedback } from './Feedback/Feedback';
export const App = () => {
  console.log('asd');
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 24,
        color: '#010101',
      }}
    >
      <Feedback />
    </div>
  );
};
