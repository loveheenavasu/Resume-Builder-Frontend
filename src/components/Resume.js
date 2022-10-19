import React, { useRef, useState } from 'react';

import { useParams } from 'react-router-dom';
import { Badge, Button, Col, Container, Image, Row } from 'react-bootstrap';
import TemplateOne from './ResumeTemplates/TemplateOne';
import TemplateTwo from './ResumeTemplates/TemplateTwo';
import TemplateThree from './ResumeTemplates/TemplateThree';

import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

function Resume() {
  const componentRef = useRef();

  const [previewMode, setPreviewMode] = useState(1);
  const templates = [
    {
      id: "template_1",
      name: "template 1",
      template: <TemplateOne previewMode={previewMode} />,
      premium: 0
    },
    {
      id: "template_2",
      name: "template 2",
      template: <TemplateTwo previewMode={previewMode} />,
      premium: 0
    },
    {
      id: "template_3",
      name: "template 3",
      template: <TemplateThree previewMode={previewMode} />,
      premium: 1
    }
  ];
  const parms = useParams()
  let currentTemplate = templates.find(o => o.id === parms.id);

  const printDocument = async () => {
    let Component = document.getElementById('divToPrint');

    await html2canvas(Component, {
      useCORS: true
    }).then((canvas) => {
      const componentWidth = Component.offsetWidth
      const componentHeight = Component.offsetHeight

      const orientation = componentWidth >= componentHeight ? 'l' : 'p'

      const imgData = canvas.toDataURL('image/jpeg')
      const pdf = new jsPDF({
        orientation,
        unit: 'px'
      })

      pdf.internal.pageSize.width = componentWidth
      pdf.internal.pageSize.height = componentHeight

      pdf.addImage(imgData, 'JPEG', 0, 0, componentWidth, componentHeight)
      pdf.save('resume.pdf')
    })
  }

  return (
    <>
      <Container className='mt-5'>
        <Container className='w-75'>
          <Row>
            <Col>
              {!currentTemplate.premium ?
                <Button variant="success" className='float-end' style={{ marginLeft: '3px' }} onClick={printDocument}>Export To PDF</Button>
                :
                <Badge pill bg="success" className='float-end' style={{ marginLeft: '3px', fontSize: '20px' }}>
                  <Image src={process.env.PUBLIC_URL + '/star.png'} style={{ width: '20px' }} />Premium
                </Badge>
              }

              <Button variant="success" className='float-end' style={{ marginLeft: '3px' }} onClick={() => setPreviewMode(previewMode ? 0 : 1)}>{previewMode ? "Dummy Mode" : "User Mode"}</Button>
              {/* <ReactToPrint
                trigger={() => <Button variant="success" className='float-end'>Save</Button>}
                content={() => componentRef.current}
              /> */}
            </Col>
          </Row>
        </Container>
      </Container>
      <Container className='mt-5' ref={componentRef} id='divToPrint'>
        {currentTemplate.template}
      </Container>
    </>
  )
}

export default Resume;