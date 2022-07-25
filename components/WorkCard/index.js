import React from "react";
import Gallery from "../Gallery";
import Chip from "@mui/material/Chip"
import Stack from "@mui/material/Stack"
import DoneIcon from '@mui/icons-material/Done';
import Link from '@mui/material/Link'

const WorkCard = ({ images, name, period, description, onClick, stack, detail, github }) => {
    return (
        <div
            className="overflow-hidden cursor-pointer rounded-lg p-2 laptop:p-4 first:ml-0"
            onClick={onClick}
        >

            <div style={{display:'flex'}}>
                <div
                    className="overflow-hidden rounded-lg  mob:h-auto"
                    style={{ marginRight:30}}
                >
                    <Gallery images={images}/>
                </div>
                <div dis>
                    
                    <h1 className="mt-5 text-3xl font-medium">
                        {name ? name : "Project Name"}
                    </h1>
                    <h2 className="text-xl opacity-50">
                        {period ? period : "period"}
                    </h2>
                    <Stack direction="row" spacing={1} className="mt-3 mb-3">
                        {stack.map((s, idx)=>
                            <Chip key={idx} label={s} size="small"/>
                        )}
                    </Stack>
                    {description.map((d, idx)=>
                        <p key={idx}>{d}</p>
                    )}
                    {
                        detail.map((d,idx)=>
                            <>
                                <div style={{display:'flex', alignItems:'center', marginTop:10}}>
                                    <DoneIcon style={{marginRight:10}}/>
                                    <h4>{d.subTitle}</h4>
                                </div>
                                <ul style={{marginLeft:30}}>
                                    {d.context.map((dc, dcIdx)=>
                                        <li key={dcIdx}>{`- ${dc}`}</li>
                                    )}
                                </ul>
                            </>
                        )
                    }
                    {
                        github.length>0 &&
                        <div className="mt-5">
                            <h3>Github URL</h3>
                            <ul style={{marginLeft:30}}>
                                {github.map((git, idx)=>
                                    <li key={idx}>
                                        - <Link href={git.url} target="_blank">{git.name}</Link>
                                    </li>
                                )}
                            </ul>
                        </div>
                    }
                    
                </div>
            </div>

        </div>
    );
};

export default WorkCard;
