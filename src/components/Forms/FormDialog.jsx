import React, {useState, useCallback} from 'react'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import {TextInput} from './index';

const FormDialog = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");

  const inputName = useCallback((event) => {
    setName(event.target.value)
  }, [setName]);

  const inputEmail = useCallback((event) => {
    setEmail(event.target.value)
  }, [setEmail]);

  const inputDescription = useCallback((event) => {
    setDescription(event.target.value)
  }, [setDescription]);

  const submitForm = () => {
    const payload = {
      text: 'お問い合わせがありました\n' +
            'お名前：' + name + '\n' +
            'Email：' + email + '\n' +
            'お問い合わせ内容：\n' + description
    }

    const url = 'https://hooks.slack.com/services/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'

    fetch(url, {
      method: 'POST',
      body: JSON.stringify(payload)
    }).then(() => {
      alert('送信が完了しました。追って連絡します！')
      setName("")
      setEmail("")
      setDescription("")
      return props.handleClose()
    })
  }

  return(
    <Dialog open={props.open} onClose={props.handleClose}>
      <DialogTitle id="alert-dialog-title">お問い合わせフォーム</DialogTitle>
      <DialogContent>
        <TextInput
          label={"お名前(必須)"} multiline={false} rows={1}
          value={name} type={"text"} onChange={inputName}
        />
        <TextInput
          label={"メールアドレス(必須)"} multiline={false} rows={1}
          value={email} type={"email"} onChange={inputEmail}
        />
        <TextInput
          label={"お問い合わせ内容(必須)"} multiline={true} rows={5}
          value={description} type={"text"} onChange={inputDescription}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={props.handleClose} color="primary">
          キャンセル
        </Button>
        <Button onClick={submitForm} color="primary">
          送信
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default FormDialog