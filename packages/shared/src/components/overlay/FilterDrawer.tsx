import React from "react";
import { Drawer, Select, Button } from "antd";

const { Option } = Select;

export interface FilterDrawerProps {
    open: boolean;
    onClose: () => void;
    onApply: () => void;
    title?: string;
    placement?: "left" | "right" | "top" | "bottom";
    width?: number;
}

const FilterDrawer: React.FC<FilterDrawerProps> = ({
    open,
    onClose,
    onApply,
    title = "Filter by",
    placement = "right",
    width = 516
}) => {
    return (
        <Drawer
            title={title}
            placement={placement}
            width={width}
            open={open}
            onClose={onClose}
            closable={false}
            // mask
            bodyStyle={{ padding: 16 }}
            style={{
                borderRadius: "16px 0 0 16px",
            }}
            styles={{
                content: {
                    borderRadius: "16px 0 0 16px",
                    boxShadow: "0px 0px 30px -5px rgba(0,0,0,0.1)",
                    background: "#FFFFFF",
                },
            }}
            footer={
                <div className="flex gap-3 px-4">
                    <Button
                        onClick={onClose}
                        className="w-1/2 h-10 rounded-lg border border-gray-300 text-gray-600"
                    >
                        Cancel
                    </Button>

                    <Button
                        type="primary"
                        onClick={onApply}
                        className="w-1/2 h-10 rounded-lg !bg-black hover:!bg-black"
                    >
                        Apply Filter
                    </Button>
                </div>
            }
        >
            {/* Column */}
            <div className="mb-4">
                <label className="block text-sm text-gray-600 mb-1">
                    Column
                </label>
                <Select<string>
                    placeholder="Select Column"
                    className="w-full"
                    size="large"
                >
                    <Option value="name">Name</Option>
                    <Option value="email">Email</Option>
                    <Option value="status">Status</Option>
                </Select>
            </div>

            {/* Operator */}
            <div>
                <label className="block text-sm text-gray-600 mb-1">
                    Operator
                </label>
                <Select<string>
                    placeholder="Select Operator"
                    className="w-full"
                    size="large"
                >
                    <Option value="equals">Equals</Option>
                    <Option value="contains">Contains</Option>
                    <Option value="startsWith">Starts With</Option>
                </Select>
            </div>
        </Drawer>
    );
};

export default FilterDrawer;
