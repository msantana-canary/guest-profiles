"use client";

import { useState } from "react";
import {
  CanaryButton,
  CanaryInput,
  CanaryTextArea,
  CanarySelect,
  CanaryCheckbox,
  CanaryRadio,
  CanaryRadioGroup,
  CanaryTag,
  CanaryTable,
  CanaryCard,
  CanaryContainer,
  CanaryGrid,
  CanaryModal,
  CanaryTabs,
  CanarySidebar,
  CanaryHeader,
  CanaryAlert,
  CanaryToast,
  CanaryLoading,
  ButtonType,
  ButtonSize,
  TagColor,
  InputSize,
  InputType,
} from "@/components/canary-ui";

export default function ComponentShowcase() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [selectedRadio, setSelectedRadio] = useState("option1");

  const sampleTableData = [
    { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User" },
    { id: 3, name: "Bob Johnson", email: "bob@example.com", role: "Manager" },
  ];

  const tableColumns = [
    { key: "id", label: "ID", width: "80px" },
    { key: "name", label: "Name" },
    { key: "email", label: "Email" },
    {
      key: "role",
      label: "Role",
      render: (value: string) => <CanaryTag label={value} color={TagColor.INFO} />
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <CanaryHeader
        title="Canary UI Component Library"
        actions={
          <CanaryButton onClick={() => alert("Action clicked!")}>
            Get Started
          </CanaryButton>
        }
      />

      <CanaryContainer maxWidth="2xl" padding="large">
        <div className="space-y-12 py-8">
          {/* Introduction */}
          <section>
            <h2 className="text-3xl font-bold mb-4">Welcome to Canary UI</h2>
            <p className="text-lg text-gray-600 mb-6">
              A comprehensive React component library for building high-fidelity prototypes.
              All components match the Canary design system for consistent, professional interfaces.
            </p>
            <CanaryAlert
              type="info"
              title="Foundation Project"
              message="This is a template repository. Clone it to start building your prototype with pre-built Canary UI components."
            />
          </section>

          {/* Buttons */}
          <section>
            <h3 className="text-2xl font-semibold mb-6">Buttons</h3>
            <CanaryCard>
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-medium mb-3 text-gray-600">Button Types</h4>
                  <div className="flex flex-wrap gap-3">
                    <CanaryButton type={ButtonType.PRIMARY}>Primary</CanaryButton>
                    <CanaryButton type={ButtonType.OUTLINED}>Outlined</CanaryButton>
                    <CanaryButton type={ButtonType.SHADED}>Shaded</CanaryButton>
                    <CanaryButton type={ButtonType.TEXT}>Text</CanaryButton>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium mb-3 text-gray-600">Button Sizes</h4>
                  <div className="flex flex-wrap items-center gap-3">
                    <CanaryButton size={ButtonSize.LARGE}>Large</CanaryButton>
                    <CanaryButton size={ButtonSize.NORMAL}>Normal</CanaryButton>
                    <CanaryButton size={ButtonSize.COMPACT}>Compact</CanaryButton>
                    <CanaryButton size={ButtonSize.TINY}>Tiny</CanaryButton>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium mb-3 text-gray-600">Button States</h4>
                  <div className="flex flex-wrap gap-3">
                    <CanaryButton>Normal</CanaryButton>
                    <CanaryButton isLoading>Loading</CanaryButton>
                    <CanaryButton isDisabled>Disabled</CanaryButton>
                  </div>
                </div>
              </div>
            </CanaryCard>
          </section>

          {/* Form Components */}
          <section>
            <h3 className="text-2xl font-semibold mb-6">Form Components</h3>
            <CanaryCard>
              <CanaryGrid columns={2} gap="large">
                <CanaryInput
                  label="Email Address"
                  type={InputType.EMAIL}
                  placeholder="Enter your email"
                  helperText="We'll never share your email"
                />

                <CanarySelect
                  label="Select Country"
                  placeholder="Choose a country"
                  options={[
                    { label: "United States", value: "us" },
                    { label: "Canada", value: "ca" },
                    { label: "United Kingdom", value: "uk" },
                  ]}
                />

                <div className="col-span-2">
                  <CanaryTextArea
                    label="Message"
                    placeholder="Enter your message"
                    rows={4}
                  />
                </div>

                <div>
                  <CanaryCheckbox label="I agree to the terms and conditions" />
                  <CanaryCheckbox label="Subscribe to newsletter" className="mt-3" />
                </div>

                <div>
                  <CanaryRadioGroup label="Preferred Contact Method">
                    <CanaryRadio
                      name="contact"
                      label="Email"
                      checked={selectedRadio === "option1"}
                      onChange={() => setSelectedRadio("option1")}
                    />
                    <CanaryRadio
                      name="contact"
                      label="Phone"
                      checked={selectedRadio === "option2"}
                      onChange={() => setSelectedRadio("option2")}
                    />
                    <CanaryRadio
                      name="contact"
                      label="SMS"
                      checked={selectedRadio === "option3"}
                      onChange={() => setSelectedRadio("option3")}
                    />
                  </CanaryRadioGroup>
                </div>
              </CanaryGrid>
            </CanaryCard>
          </section>

          {/* Data Display */}
          <section>
            <h3 className="text-2xl font-semibold mb-6">Data Display</h3>

            <div className="space-y-6">
              {/* Tags */}
              <CanaryCard title="Tags">
                <div className="flex flex-wrap gap-2">
                  <CanaryTag label="Success" color={TagColor.OK} />
                  <CanaryTag label="Warning" color={TagColor.WARNING} />
                  <CanaryTag label="Error" color={TagColor.ERROR} />
                  <CanaryTag label="Info" color={TagColor.INFO} />
                  <CanaryTag label="Dark" color={TagColor.DARK} />
                </div>
              </CanaryCard>

              {/* Table */}
              <CanaryCard title="Table Example">
                <CanaryTable
                  columns={tableColumns}
                  data={sampleTableData}
                  onRowClick={(row) => alert(`Clicked row: ${row.name}`)}
                />
              </CanaryCard>
            </div>
          </section>

          {/* Layout Components */}
          <section>
            <h3 className="text-2xl font-semibold mb-6">Layout & Navigation</h3>

            <CanaryCard title="Tabs Example">
              <CanaryTabs
                tabs={[
                  { id: "tab1", label: "Overview", content: <p>Overview content goes here</p> },
                  { id: "tab2", label: "Settings", content: <p>Settings content goes here</p> },
                  { id: "tab3", label: "Users", content: <p>Users content goes here</p> },
                ]}
              />
            </CanaryCard>

            <div className="mt-6">
              <CanaryCard title="Modal Example">
                <CanaryButton onClick={() => setIsModalOpen(true)}>
                  Open Modal
                </CanaryButton>

                <CanaryModal
                  isOpen={isModalOpen}
                  onClose={() => setIsModalOpen(false)}
                  title="Example Modal"
                  footer={
                    <div className="flex justify-end gap-3">
                      <CanaryButton type={ButtonType.OUTLINED} onClick={() => setIsModalOpen(false)}>
                        Cancel
                      </CanaryButton>
                      <CanaryButton onClick={() => setIsModalOpen(false)}>
                        Confirm
                      </CanaryButton>
                    </div>
                  }
                >
                  <p className="text-gray-600">
                    This is an example modal dialog. It can contain any content you need,
                    including forms, images, or other components.
                  </p>
                </CanaryModal>
              </CanaryCard>
            </div>
          </section>

          {/* Feedback */}
          <section>
            <h3 className="text-2xl font-semibold mb-6">Feedback Components</h3>

            <div className="space-y-6">
              <CanaryCard title="Alerts">
                <div className="space-y-3">
                  <CanaryAlert type="success" message="This is a success alert!" />
                  <CanaryAlert type="error" message="This is an error alert!" />
                  <CanaryAlert type="warning" message="This is a warning alert!" />
                  <CanaryAlert type="info" message="This is an info alert!" />
                </div>
              </CanaryCard>

              <CanaryCard title="Toast Notifications">
                <CanaryButton onClick={() => setShowToast(true)}>
                  Show Toast
                </CanaryButton>

                <CanaryToast
                  message="This is a toast notification!"
                  type="success"
                  isOpen={showToast}
                  onClose={() => setShowToast(false)}
                />
              </CanaryCard>

              <CanaryCard title="Loading Spinner">
                <div className="flex items-center gap-4">
                  <CanaryLoading />
                  <CanaryLoading size={32} color="#e40046" />
                  <CanaryLoading size={48} color="#008040" />
                </div>
              </CanaryCard>
            </div>
          </section>

          {/* Footer */}
          <section className="text-center text-gray-500 text-sm py-8 border-t">
            <p>Canary UI Component Library - Built with Next.js, React, and Tailwind CSS</p>
            <p className="mt-2">Clone this project to start building your prototype</p>
          </section>
        </div>
      </CanaryContainer>
    </div>
  );
}
