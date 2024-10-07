import * as React from 'react';

interface EmailTemplateProps {
  Email: string,
  Message: string
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  Email,
  Message,
}) => (
  <div>
      <b>Hi Fardeen you got an message from {Email}</b>
      <br />
      <p>{Message}</p>
  </div>
);
