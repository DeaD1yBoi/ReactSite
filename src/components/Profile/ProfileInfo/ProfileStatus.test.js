import React from 'react'
import {create} from "react-test-renderer"
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", ()=>{
    test("status from the props should be in the state", ()=>{
        const component = create(<ProfileStatus status='TESTTEXT'/>);
        const instance = component.getInstance();
        expect(instance.state.status).toBe('TESTTEXT');
    });
    test("after creation span should be dispalyed with correct status", ()=>{
        const component = create(<ProfileStatus status='TESTTEXT'/>);
        const root = component.root;
        expect(()=>{
            let input = root.findByType("input")
        }).toThrow();
    });
    test("after creation span should be dispalyed with correct status", ()=>{
        const component = create(<ProfileStatus status='TESTTEXT'/>);
        const root = component.root;
        const span = root.findByType('span')
        expect(span.children[0]).toBe("TESTTEXT");
    });
    test("input should be displayed in editMode instead of span", ()=>{
        const component = create(<ProfileStatus status='TESTTEXT'/>);
        const root = component.root;
        const span = root.findByType('span')
        span.props.onDoubleClick();
        const input = root.findByType("input")
        expect(input.props.value).toBe("TESTTEXT");
    });
    test("callback should be called", ()=>{
        const mockCallback = jest.fn();
        const component = create(<ProfileStatus status='TESTTEXT' updateStatus={mockCallback}/>);
        const instance = component.getInstance();
        instance.deactivateEditMode();
        expect(mockCallback.mock.calls.length).toBe(1);
    });
})