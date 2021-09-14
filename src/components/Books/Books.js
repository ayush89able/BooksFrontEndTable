import React, { useEffect, useState } from 'react'
import { Table, Space, Select, Row, Col, Modal, Button, Input } from 'antd';
import { connect } from 'react-redux';
import { bookActions } from '../../redux/actions/bookActions'
import { CustomDiv, CenteredDiv, CustomWrapper } from './style'

function Books(props) {
  const {
    getBooks,
    addBook,
    deleteBook,
    editBook,
    books,
    statusFetchBook,
    statusAddBook,
    statusEditBook,
    statusDeleteBook
  } = props
  const { Option } = Select;
  const [data, setData] = useState([])
  const [selectedId, setSelectedId] = useState(null)
  const [filter, setFilter] = useState('')
  const [newBookData, setNewBookData] = useState({
    bookName: '',
    authorName: '',
    bookType: '',
    publishYear: '',
    genre: ''
  })
  const [visible, setVisible] = useState(false)
  const [visibleEditModal, setVisibleEditModal] = useState(false)

  const onEdit = record => {
    console.log('click on edit', record)
    setVisibleEditModal(true)
    setNewBookData({
      authorName: record.authorName,
      bookName: record.bookName,
      bookType: record.bookType,
      genre: record.genre,
      publishYear: record.publishYear
    })
    setSelectedId(record._id)
  }

  const onDelete = record => {
    console.log('click on delete', record)
    deleteBook(record._id)
  }

  const columns = [
    {
      title: 'Book Name',
      dataIndex: 'bookName',
      key: 'bookName'
    },
    {
      title: 'Author Name',
      dataIndex: 'authorName',
      key: 'authorName'
    },
    {
      title: 'Book Type',
      dataIndex: 'bookType',
      key: 'bookType'
    },
    {
      title: 'Genre',
      dataIndex: 'genre',
      key: 'genre'
    },
    {
      title: 'Publish Year',
      dataIndex: 'publishYear',
      key: 'publishYear'
    },
    {
      title: 'Action',
      key: 'action',
      render: (record) => (
        <Space size="middle">
          <a onClick={() => onEdit(record)}>Edit</a>
          <a onClick={() => onDelete(record)}>Delete</a>
        </Space>
      ),
    },
  ];

  useEffect(() => {
    getBooks(filter)
  }, [])

  useEffect(() => {
    getBooks(filter)
  }, [statusAddBook, statusEditBook, statusDeleteBook, filter])

  useEffect(() => {
    if (books) {
      console.log('books', books)
      setData(books)
    }
  }, [books])

  useEffect(() => {
    console.log('newBookData',newBookData)
  }, [newBookData])

  const changeHandler = (e) => {
    console.log(e.target.value)
    setNewBookData({
      ...newBookData,
      [e.target.name]: e.target.value
    })
    console.log(newBookData)
  }

  const addBookHandler = () => {
    addBook(newBookData)
    setVisible(false)
    clearForm()
  }

  const clearForm = () => {
    setNewBookData({
      bookName: '',
      authorName: '',
      bookType: '',
      genre: '',
      publishYear: ''
    })
  }

  const editBookHandler = () => {
    editBook(selectedId, newBookData)
    setVisibleEditModal(false)
  }

  const onCancelHandler = () => {
    setVisible(false)
    setVisibleEditModal(false)
    clearForm()
  }

  const onGenreChange = (val) => {
    setNewBookData({
      ...newBookData,
      genre: val
    })
  }

  return (
    <CenteredDiv>
      <Row justify="end">
        <Col >

          <CustomDiv>
            <p>Fitler By Genre</p>
            <Select defaultValue="all" style={{ width: 120 }} onChange={(val) => setFilter(val)}>
              <Option value="all">All</Option>
              <Option value="Fantasy">Fantasy</Option>
              <Option value="Thriller">Thriller</Option>
              <Option value="Mystery">Mystery</Option>
              <Option value="Romance">Romance</Option>
              <Option value="Westerns">Westerns</Option>
              <Option value="Dystopian">Dystopian</Option>
              <Option value="Contemporary">Contemporary</Option>
            </Select>
            <Button type="primary" onClick={() => setVisible(true)}>
              Add Book
            </Button>
          </CustomDiv>
        </Col>
      </Row>
      <Row>
        <Col span={24} >
          <Table columns={columns} dataSource={data} />
        </Col>
      </Row>


      <Modal
        title="Add a book"
        centered
        visible={visible}
        onOk={addBookHandler}
        okText="Add"
        okType="danger"
        onCancel={onCancelHandler}
        width={400}
      >
        <CustomWrapper>
          <Space direction="vertical">
            <Input placeholder="Book name" name="bookName" onChange={changeHandler} value={newBookData.bookName} />
            <Input placeholder="Author name" name="authorName" onChange={changeHandler} value={newBookData.authorName} />
            <Input placeholder="Book type" name="bookType" onChange={changeHandler} value={newBookData.bookType} />
            <Input placeholder="Publish Year" type="number" name="publishYear" onChange={changeHandler} value={newBookData.publishYear} />
            <Select
              placeholder="Select a genre"
              onChange={onGenreChange}
              allowClear
            >
              <Option value="Fantasy">Fantasy</Option>
              <Option value="Thriller">Thriller</Option>
              <Option value="Mystery">Mystery</Option>
              <Option value="Romance">Romance</Option>
              <Option value="Westerns">Westerns</Option>
              <Option value="Dystopian">Dystopian</Option>
              <Option value="Contemporary">Contemporary</Option>
            </Select>
          </Space>
        </CustomWrapper>
      </Modal>

      <Modal
        title="Edit a book"
        centered
        visible={visibleEditModal}
        onOk={editBookHandler}
        okText="Edit"
        okType="danger"
        onCancel={onCancelHandler}
        width={400}
      >
        <CustomWrapper>
          <Space direction="vertical">
            <Input placeholder="Book name" name="bookName" onChange={changeHandler} value={newBookData.bookName} />
            <Input placeholder="Author name" name="authorName" onChange={changeHandler} value={newBookData.authorName} />
            <Input placeholder="Book type" name="bookType" onChange={changeHandler} value={newBookData.bookType} />
            <Input placeholder="Publish Year" type="number" name="publishYear" onChange={changeHandler} value={newBookData.publishYear} />
            <Select
              placeholder="Select a genre"
              onChange={onGenreChange}
              value={newBookData.genre}
              allowClear
            >
              <Option value="Fantasy">Fantasy</Option>
              <Option value="Thriller">Thriller</Option>
              <Option value="Mystery">Mystery</Option>
              <Option value="Romance">Romance</Option>
              <Option value="Westerns">Westerns</Option>
              <Option value="Dystopian">Dystopian</Option>
              <Option value="Contemporary">Contemporary</Option>
            </Select>
          </Space>
        </CustomWrapper>
      </Modal>
    </CenteredDiv>
  );
}

function mapStateToProps(state) {
  const books = state.booksData.books
  const statusFetchBook = state.booksData.statusFetchBook
  const statusAddBook = state.booksData.statusAddBook
  const statusEditBook = state.booksData.statusEditBook
  const statusDeleteBook = state.booksData.statusDeleteBook
  return {
    books,
    statusFetchBook,
    statusAddBook,
    statusEditBook,
    statusDeleteBook
  }
}

// export default App;
const mapActionsToProps = {
  getBooks: bookActions.getBooks,
  addBook: bookActions.addBook,
  deleteBook: bookActions.deleteBook,
  editBook: bookActions.editBook
};

const connectedBooks = connect(mapStateToProps, mapActionsToProps)(Books);
export { connectedBooks as Books };
