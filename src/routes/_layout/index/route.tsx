import { toast } from 'react-toastify';
import { Button, Stack } from '@mui/material';
import { createFileRoute } from '@tanstack/react-router';
import { motion } from 'motion/react';
import { FlipCard } from './-components/flip-card';
import { OpenFormModalButton } from './-components/form-modal';
import { ScrollAnimation } from './-components/scroll-animation';
import { OpenModalButton } from './-components/test-modal';

export const Route = createFileRoute('/_layout/')({
  component: RouteComponent,
});

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 },
};

const TEXT = 'Welcome Home Page!';

function RouteComponent() {
  return (
    <>
      <Stack spacing={2} className="h-screen">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          {Array.from(TEXT).map(item => (
            <motion.span variants={itemVariants} key={item} className="inline-block text-[30px]">
              {item === ' ' ? '\u00A0' : item}
            </motion.span>
          ))}
        </motion.div>
        <Stack direction="row" spacing={2}>
          <OpenModalButton />
          <OpenFormModalButton />
        </Stack>
        <Stack direction="row" spacing={2}>
          <Button variant="outlined" color="success" onClick={() => toast.success('This is a success toast')}>
            Success Toast
          </Button>
          <Button variant="outlined" color="error" onClick={() => toast.error('This is a error toast')}>
            Error Toast
          </Button>
          <Button variant="outlined" color="warning" onClick={() => toast.warning('This is a warning toast')}>
            Warning Toast
          </Button>
          <Button variant="outlined" color="info" onClick={() => toast.info('This is a info toast')}>
            Info Toast
          </Button>
        </Stack>
        <FlipCard />
      </Stack>
      <div className="flex h-screen items-center justify-center">hehe</div>
      <ScrollAnimation />
    </>
  );
}
