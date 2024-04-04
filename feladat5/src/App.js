import 'bootstrap/scss/bootstrap.scss';

function App() {

  return (
    <div className='container'>
      <div className='mb-2'>
        <label className='form-label' htmlFor='title'>Cím</label>
        <input
          type='text'
          className='form-control'
          id='title'
        />
      </div>
      <div className='mb-2'>
        <label className='form-label' htmlFor='isbn'>ISBN</label>
        <input
          type='text'
          className='form-control'
          id='isbn'
        />
      </div>

      <div className='mb-2'>
        <input
          type='button'
          className='btn btn-primary'
          value='Új könyv'
        />
      </div>
    </div>
  );
}

export default App;
