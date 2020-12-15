function App() {
  const [offset, setOffset] = useState(0);
  const [totalRecords, setTotalRecords] = useState(0);

  const onPageChanged = (page) => {
    const offset = (page - 1) * pageLimit;
    setOffset(offset);
  };

  useEffect(() => {
    collection
      .orderBy('id')
      .startAfter(offset)
      .limit(5)
      .get()
      .then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => doc.data());
        dispatch({ type: 'OnSuccess', payload: data });
      })
      .catch((error) => {
        dispatch({ type: 'OnFailure' });
      });
    collection.get().then(function (querySnapshot) {
      setTotalRecords(querySnapshot.size);
    });
  }, [offset]);
  const { loading, user, error } = state;

  return (
    <div>
      <Pagination
        totalRecords={totalRecords}
        pageLimit={pageLimit}
        pageRangeDisplayed={1}
        onChangePage={onPageChanged}
      />
    </div>
  );
}
export default App;
