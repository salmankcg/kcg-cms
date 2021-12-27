import {useRef} from 'react';
import Layout from '../components/Layout/';
import { Editor } from '@tinymce/tinymce-react';




function EditorTest(props) {
    const editorRef = useRef(null);
   const log = () => {
     if (editorRef.current) {
       console.log(editorRef.current.getContent());
     }
   };
   const onChange = (e) =>{
    console.log(e.target.getContent())
  }

    return (
        <Layout>
            <>
            <Editor
            initialValue="<p>This is the initial content of the editor.Forget Old school. Let's create a new Era. Let's go KCG..</p>"
            init={{
                plugins: 'link image code',
                toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code'
            }}
            onChange={onChange}
            />
            <button onClick={log}>Log editor content</button>
            </>
        </Layout>
    );
}

export default EditorTest;