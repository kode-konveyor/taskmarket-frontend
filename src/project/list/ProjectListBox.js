import React from 'react'
import List from '../../common/List'
import ProjectListItem from './ProjectListItem'

export default function ProjectListBox({data}) {
    return <List Of={ProjectListItem} data = {data} className='projectListBox'/>
}