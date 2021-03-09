import React from 'react';
import {connect} from "react-redux"
import {createProject} from "../../store/actions/projectsActions";
import {Redirect} from "react-router-dom"
import styled from 'styled-components'
import Container from 'react-bootstrap/Container'
import AlignDiv from "../layout/elements/AlignDiv";
import LoginBtb from "../layout/elements/Btn"
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css'
import PreviewBlogDetails from "../modals/PreviewBlogDetails";
import CustomUploadButton from 'react-firebase-file-uploader/lib/CustomUploadButton';
import PreviewBlogDasboard from "../modals/PreviewProjectDashboard";


import {Col, Row} from "react-bootstrap";
import fbConfig from "../../config/fbConfig";

const StyledContainer = styled(Container)`
    background-color: white;
    color: black;
    padding-top: 5vh;
`
const FileName = styled.p`
    padding: 0;
    margin: 0;
    font-size: 0.8rem;
`

const TextEditor = styled(ReactQuill)`
       font-family: ${(props) => props.theme.fontFamily.mainFont};
`
const Label = styled.label`
    font-size: 100%;
`
const ImageRow = styled(Row)`
    text-align: center;
    margin-bottom: 4vh;
`
const FormInput = styled.input`
      font-size: ${(props) => props.theme.fontSize.size1A2};
      color: black;
    border: 1px solid #ccc;
    padding: 0.5rem;
    margin-bottom: ${(props) => props.theme.spacers.mediumSpace};
    background-color: transparent;
    width: 100%;
    transition: .4s;
    box-shadow: none;
    outline: none;
    &::placeholder{
      font-size: ${(props) => props.theme.fontSize.size1A2};
      color: ${(props) => props.theme.colors.mainColor};
`


class CreateProject extends React.Component {

    constructor(props) {
        super(props)
        this.state = { text: '',
                        title:"",
                        blogImgName:"Název souboru",
                        blogImgBlog:"Název souboru",
                        perex:"",
                        isUploading: false,
                        progress: 0,
                        imageURL:"asds/",
                        imageBlogURL:"asasds/"
        };
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

    }
    handleChange(e) {
        this.setState({text: e})
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({title:'',perex:'',
            text:'',
            imageURL:"",blogImgName:"",blogImgBlog:"",imageBlogURL:""});
        this.props.createProject(this.state)

        console.log(this.state)
    }
    handleUploadStart = () => this.setState({ isUploading: true, progress: 0 });
    handleProgress = progress => this.setState({ progress });
    handleUploadError = error => {
        this.setState({ isUploading: false });
        console.error(error);
    };
    handleUploadSuccess = filename => {

        this.setState({ blogImgName: filename, progress: 100, isUploading: false });
       fbConfig
            .storage()
            .ref("images")
            .child(filename)
            .getDownloadURL()
            .then(url => this.setState({ imageURL: url }));
    };
    handleUploadSuccessImg = filename => {

        this.setState({ blogImgBlog: filename, progress: 100, isUploading: false });
        fbConfig
            .storage()
            .ref("images")
            .child(filename)
            .getDownloadURL()
            .then(url => this.setState({ imageBlogURL: url }));
    };


    render() {
        const {auth,profile} = this.props;
        if(!auth.uid) return <Redirect to={"/signin"}/>
        return (

            <StyledContainer>


                <ImageRow>

                    <Col md={4}>
                        <CustomUploadButton
                            maxHeight={"1920"}
                            maxWidth={"1920"}
                            randomizeFilename
                            accept="images/*"
                            storageRef={fbConfig.storage().ref('images')}
                            onUploadStart={this.handleUploadStart}
                            onUploadError={this.handleUploadError}
                            onUploadSuccess={this.handleUploadSuccessImg}
                            onProgress={this.handleProgress}
                            style={{ border: "3px dashed rgb(52,55,128,0.4) ",height:"100%",width:"100%",color:"rgb(52,55,128,0.4)", borderRadius: 4
                            }}
                        >
                            Vyberte náhledovou fotku
                            <FileName>{this.state.blogImgBlog}</FileName>
                        </CustomUploadButton>
                    </Col>

                    <Col md={8}>
                        <CustomUploadButton
                            maxHeight={"400"}
                            maxWidth={"1920"}
                            randomizeFilename
                            accept="images/*"
                            storageRef={fbConfig.storage().ref('images')}
                            onUploadStart={this.handleUploadStart}
                            onUploadError={this.handleUploadError}
                            onUploadSuccess={this.handleUploadSuccess}
                            onProgress={this.handleProgress}
                            style={{ border: "3px dashed rgb(52,55,128,0.4) ",height:"100%",width:"100%",color:"rgb(52,55,128,0.4)", borderRadius: 4
                            }}
                        >
                            Vyberte hlavní fotku
                            <FileName>{this.state.blogImgName}</FileName>
                        </CustomUploadButton>
                    </Col>

                </ImageRow>

                <form onSubmit={this.handleSubmit}>

                <Label htmlFor={"title"}>Titulek</Label>
                <FormInput type="text"  onChange= {e => {
                    this.setState({title: e.target.value });
                }}

                />
                <Label htmlFor={"text"}>Perex</Label>
                <FormInput
                    maxLength="90"
                    type="text"  onChange= {e => {
                    this.setState({perex: e.target.value });
                }}

                />
                <Label htmlFor={"title"}>Obsah</Label>
                <TextEditor value={this.state.text}
                            placeholder={this.props.placeholder}
                            onChange={this.handleChange} />
                <AlignDiv textAlign={"center"}>
                    <LoginBtb

                        type={"submit"} onClick={this.handleSubmit}  name={"Vytvořit"}/>
                </AlignDiv>
            </form>
            <PreviewBlogDetails imageUrl={this.state.imageURL} profile={profile} title={this.state.title}  text={this.state.text}/>
            <PreviewBlogDasboard imageBlogURL={this.state.imageBlogURL} perex={this.state.perex} title={this.state.title} profile={profile}/>

            </StyledContainer>

        )
    }
}


const mapStateToProps = (state) =>{
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}
const  mapDispatchProps = (dispatch) =>{
    return{
        createProject: (project) => dispatch(createProject(project))
    }
}


export default connect(mapStateToProps , mapDispatchProps)(CreateProject);