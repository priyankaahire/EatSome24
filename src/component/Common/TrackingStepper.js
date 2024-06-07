import { Step, StepContent, StepIcon, StepLabel, Stepper } from "@mui/material";
import styled from "@emotion/styled";

const QontoStepIconRoot = styled('div')(({ theme, ownerState }) => ({
 // display: 'flex',
//   height: 22,
   alignItems: 'center',
  ...(ownerState.active && {
    color: '#784af4',
  }),
  '& .QontoStepIcon-completedIcon': {
    color: '#784af4',
    zIndex: 1,
    fontSize: 18,
  },
  '& .QontoStepIcon-circle': {
    width: 8,
    height: 8,
    borderRadius: '50%',
    backgroundColor: 'currentColor',
  }
}));

function QontoStepIcon(props) {
  const { active, className } = props;
  return (
    <QontoStepIconRoot ownerState={{ active }} className={className}>
      <div className="QontoStepIcon-circle" />
    </QontoStepIconRoot>
  );
}

const TrackingStepper = (props) => {
const {steps} = props

return (
    <>
     <Stepper activeStep={-1} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel  StepIconComponent={QontoStepIcon}><span className="text-gray-900 text-sm font-bold ">{step.label}</span></StepLabel>
          </Step>
        ))}
      </Stepper>
    </>
)
}


export default TrackingStepper